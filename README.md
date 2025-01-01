# 🤖 Bot Push Kontak WhatsApp

Simpel Bot WhatsApp dengan library [Baileys](https://github.com/WhiskeySockets/Baileys) yang memudahkan kamu melakukan Push Kontak dan Save Kontak.  

## 🚀 Fitur
- Menu lebih simpel
- Push kontak ke member grup
- Save kontak otomatis (.vcf)
- Fitur Filter Nomor
- Delay random/tetap
- Mode public/self
- AI Chat (ChatGPT)
- Support Multi Device
- 100% Gratis

## 📋 Daftar Command

### 🕒 Pengaturan Delay
```bash
.setdelay <delay>     # Set delay tetap (ms)
.setdelay <min>|<max> # Set delay random (ms)
```

### 📨 Push Kontak
```bash
.pushkontak <teks>                  # Push ke member grup saat ini
.pushkontak <teks>|<idgrup>         # Push ke member grup tertentu
.pushkontak -filter <teks>          # Push dengan filter nomor
.pushkontak -filter <teks>|<idgrup> # Push dengan filter ke grup tertentu
```

### 📱 Save Kontak
```bash
.savekontak                    # Save member grup saat ini (nama grup)
.savekontak <nama>             # Save member dengan nama custom
.savekontak <idgrup>           # Save member grup tertentu (nama grup)
.savekontak <nama>|<idgrup>    # Save member dengan nama custom + grup tertentu
```

### ⚙️ Pengaturan & Info
```bash
.menu          # Tampilkan menu utama
.listidgc      # Lihat daftar ID grup
.clearfilter   # Hapus filter nomor
.setmode       # Ubah mode bot (public/self)
.ai            # Tanya AI
.help          # Panduan bot
```

## 🛠️ Instalasi

### Deploy ke Replit
1. Buat akun [Replit](https://replit.com)
2. Klik tombol dibawah ini:
   
   [![Run on Repl.it](https://replit.com/badge/github/rifandavinci/bot-pushkontak)](https://replit.com/new/github/rifandavinci/bot-pushkontak)

3. Klik "Import from Github"
4. Tunggu proses instalasi selesai
5. Klik tombol "Run" ▶️
6. Sambungkan ke bot dengan pairing code
7. Bot siap digunakan!

### Run di Local/VPS
```bash
# Clone repository
git clone https://github.com/rifandavinci/bot-pushkontak.git

# Masuk ke folder
cd bot-pushkontak

# Install dependencies
npm install

# Jalankan bot
npm start
```

## 📝 Cara Penggunaan

### Setting Delay
```bash
# Set delay tetap 3 detik
.setdelay 3000

# Set delay random 3-5 detik
.setdelay 3000|5000
```

### Push Kontak
```bash
# Push ke member grup saat ini
.pushkontak Pesan push kontak

# Push ke grup tertentu
.pushkontak Pesan|idgrup

# Push dengan filter (skip nomor yang sudah di push)
.pushkontak -filter Pesan

# Push dengan filter + id grup
.pushkontak -filter Pesan|idgrup
```

### Save Kontak
```bash
# Save member grup saat ini
.savekontak
# Hasil: Grup 1, Grup 2, dst

# Save dengan nama custom
.savekontak Rifan
# Hasil: Rifan 1, Rifan 2, dst

# Save member grup lain (dengan ID)
.savekontak 1234567890@g.us
# Hasil: NamaGrup 1, NamaGrup 2, dst

# Save grup lain dengan nama custom + ID
.savekontak Rifan|1234567890@g.us
# Hasil: Rifan 1, Rifan 2, dst
```

### Mode Bot
```bash
# Mode self (hanya owner)
.setmode self

# Mode public (semua bisa pakai fitur AI)
.setmode public
```

## ⚠️ Catatan Penting
1. Set delay dulu sebelum push kontak
2. Gunakan `.listidgc` untuk melihat ID grup
3. Rate limit: max 100 pesan/menit
4. Filter akan tersimpan sampai di clear manual
5. Mode public hanya untuk fitur AI
6. File kontak (.vcf) bisa langsung diimport
7. Nama kontak otomatis berurutan dengan nomor

## 🔗 Links
- Channel Update: https://bit.ly/m/rifandavinci
- Author: [Rifan Davinci](https://github.com/rifandavinci)

## 📄 License
[MIT License](LICENSE)
