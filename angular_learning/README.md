# QUIZ

1.  - PostStart ==> dijalankan segera setelah suatu kontainer dibuat, hanya saja hook ini belum tentu akan dieksekusi sebelum    
      ENTRYPOINT dari kontainer dan tidak ada parameter yang diberikan pada handler.
    - PreStop ==> dijalankan sesaat sebelum kontainer dimatikan, karena req suatu API/event pengaturan.

2.  dipanggil segera saat default change detector mengecek properti directive's data-bound untuk pertama kalinya. ngOnInit hanya 
    dipanggil sekali disaat server dijalankan/komponen di inisialisasikan.

3.  dipanggil setelah semuah view komponen (dan view child) di inisialisasikan.

4.  dipanggil setelah konten pada view berubah diakibatkan oleh sebuah event input.

5.  ketika melakukan reload maka akan memanggil ngOnInit dan ngOnChanges dengan value sebelumnya kosong karena value dari konten 
    belum berubah. kemudian ketika tombol change yang memiliki nilai input didalamnya di tekan maka pada ngOnChange akan merubah value dari konten dan memiliki value sebelumnya yang bernilai value pertama yang dimiliki konten sebelum dirubah.
