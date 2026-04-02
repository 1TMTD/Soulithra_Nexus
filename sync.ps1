# sync.ps1 — автоматична синхронізація з GitHub

# Перейти у корінь репозиторію
Set-Location "C:\Users\user\Soulithra_Nexus"

# Підтягнути останні зміни з GitHub
git pull origin main

# Додати всі локальні зміни
git add .

# Зробити коміт з повідомленням
git commit -m "auto-sync"

# Відправити зміни на GitHub
git push origin main
