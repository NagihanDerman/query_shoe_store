// indirim oranı verisi varsa indirimli fiyatı hesaplar,  yoksa normal fiyati dondurur

export default (price: number, discount?: number) => {
  return discount ? price - (price * discount) / 100 : price;
};
