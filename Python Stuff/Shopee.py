bills = [
  75_000,
  230_000,
  340_000,
  820_000,
  730_000
]

total_bills = 0             # Total seluruh tagihan SEBELUM didiskon
total_discounted_bills = 0  # Total seluruh tagihan SETELAH didiskon
total_discounts = 0         # Jumlah harga yang dipotong oleh diskon

for checkout in bills:
  
  total_bills += checkout   # Menambahkan tagihan checkout saat ini ke total tagihan SEBELUM diskon
  discounted_bill = 0       # Membuat variable baru utk menyimpan tagihan checkout SETELAH didiskon nantinya
  
  if 250_000 <= checkout <= 400_000:
    print("Susi mendapatkan Diskon Waras (15%)!")
    discounted_bill = checkout - (checkout * 15 / 100)
    
  elif 401_000 <= checkout <= 650_000:
    print("Susi mendapatkan Diskon Depresi (25%)!")
    discounted_bill = checkout - (checkout * 25 / 100)
    
  elif 651_000 <= checkout <= 850_000:
    print("Susi mendapatkan Diskon Gila (35%)!")
    discounted_bill = checkout - (checkout * 35 / 100)
    
  elif 851_000 <= checkout <= 1_000_000:
    print("Susi mendapatkan Diskon Stres Akut (50%)!")
    discounted_bill = checkout - (checkout * 50 / 100)
  
  else:
    print("Susi belum mendapatkan diskon!")
  
  total_discounts += discounted_bill                    # Menghitung total diskon yang didapatkan Susi
  total_discounted_bills += checkout - discounted_bill  # Menghitung total tagihan SETELAH didiskon


print()       # Pembatas, biar rapi aja

print(f"Susi melakukan checkout sebanyak {len(bills)} kali")
print(f"Susi memiliki total tagihan belanja (sebelum didiskon) sebesar Rp{total_bills}")
print(f"Susi mendapatkan total diskon sebesar Rp{total_discounts}")
print(f"Susi harus membayar sebesar Rp{total_discounted_bills}")