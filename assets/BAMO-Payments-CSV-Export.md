# Filter für BAMO Spenden (nur mit Kommentare und mehr als 210 Sats Spende)
# Ablage unter "$HOME\Downloads\bamo-payments.csv"

$LnbitsUrl = "https://deine-lnbits.example"
$Key       = "<INVOICE_KEY_DES_WALLETS>"

$payments = Invoke-RestMethod -Uri "$LnbitsUrl/api/v1/payments?limit=1000" `
                              -Headers @{ "X-Api-Key" = $Key }

$payments |
  Where-Object {
    $_.status -eq "success" -and
    $_.extra.tag -eq "lnurlp" -and
    ($_.amount / 1000) -ge 210 -and
    -not [string]::IsNullOrWhiteSpace($_.extra.comment)
  } |
  ForEach-Object {
    [pscustomobject]@{
      date          = $_.time
      sats          = $_.amount / 1000
      status        = $_.status
      memo          = $_.memo
      comment       = $_.extra.comment
      lnaddress     = $_.extra.lnaddress
      fiat_amount   = $_.extra.wallet_fiat_amount
      fiat_currency = $_.extra.wallet_fiat_currency
      payment_hash  = $_.payment_hash
    }
  } |
  Export-Csv -Path "$HOME\Downloads\bamo-payments.csv" -NoTypeInformation -Encoding UTF8




# Ungefilterte Abfrage

$LnbitsUrl = "https://deine-lnbits.example"
$Key       = "<INVOICE_KEY_DES_WALLETS>"

$payments = Invoke-RestMethod -Uri "$LnbitsUrl/api/v1/payments?limit=1000" `
                              -Headers @{ "X-Api-Key" = $Key }

function ConvertTo-Cell($v) {
  if ($null -eq $v -or $v -is [string] -or $v -is [ValueType]) { $v }
  else { $v | ConvertTo-Json -Compress -Depth 10 }
}

# jede Zahlung flach machen: extra.<key> wird zu eigener Spalte
$flat = foreach ($p in $payments) {
  $row = [ordered]@{}
  foreach ($prop in $p.PSObject.Properties) {
    if ($prop.Name -eq 'extra') { continue }
    $row[$prop.Name] = ConvertTo-Cell $prop.Value
  }
  if ($p.extra) {
    foreach ($e in $p.extra.PSObject.Properties) {
      $row["extra.$($e.Name)"] = ConvertTo-Cell $e.Value
    }
  }
  [pscustomobject]$row
}

# Vereinigung aller Spaltennamen (Zahlungen haben unterschiedliche extra-Felder)
$cols = $flat | ForEach-Object { $_.PSObject.Properties.Name } | Select-Object -Unique

$flat |
  Select-Object $cols |
  Export-Csv -Path "$HOME\Downloads\bamo-payments-full.csv" -NoTypeInformation -Encoding UTF8
