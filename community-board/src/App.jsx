import './App.css'
import FoodTruckCard from './components/FoodTruckCard'

const trucks = [
  {
    name: 'Birria-Landia',
    cuisine: 'Mexican',
    image:
      'https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg',
    menuUrl: 'https://thebirrialandia.com/menu/'
  },
  {
    name: 'Mysttik Masala',
    cuisine: 'Indian',
    image:
      'https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42',
    menuUrl: 'https://indianfoodny.com/'
  },
  {
    name: 'The Halal Guys',
    cuisine: 'Middle Eastern',
    image:
      'https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024',
    menuUrl: 'https://thehalalguys.com/menu/'
  },
  {
    name: 'NY Dosas',
    cuisine: 'Vegetarian',
    image:
      'https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg',
    menuUrl: 'https://nydosas.com/menu/'
  },
  {
    name: 'Jerk Pan',
    cuisine: 'Jamaican',
    image:
      'https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg',
    menuUrl:
      'https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/'
  },
  {
    name: 'Tong',
    cuisine: 'Bangladeshi',
    image:
      'https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg',
    menuUrl:
      'https://www.facebook.com/Bangladeshistreetfoods/'
  },
  {
    name: 'King Souvlaki of Astoria',
    cuisine: 'Greek',
    image:
      'https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg',
    menuUrl: 'https://kingsouvlakinyc.com/'
  },
  {
    name: "Ling's Sweet Mini Cakes",
    cuisine: 'Chinese',
    image:
      'https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg',
    menuUrl: 'https://canalstreet.market/'
  },
  {
    name: "Uncle Gussy's",
    cuisine: 'Greek',
    image:
      'https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg',
    menuUrl: 'https://unclegussys.com/menus/'
  },
  {
    name: 'Patacon Pisao',
    cuisine: 'Venezuelan',
    image:
      'https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg',
    menuUrl: 'https://www.pataconpisaonyc.com/menus/'
  },
  {
    name: "Mom's Momo",
    cuisine: 'Tibetan',
    image:
      'https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png',
    menuUrl:
      'https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/'
  },
  {
    name: 'Makina Cafe',
    cuisine: 'Ethiopian',
    image:
      'https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg',
    menuUrl: 'https://makinacafenyc.com/'
  }
]

const App = () => {
  return (
    <div className="App">
      <header className="hero">
        <img src="/awning.png" alt="Red and white awning" className="awning" />
        <h1>Food Truck Favorites</h1>
        <p>Discover popular food trucks and explore their menus</p>
        </header>

      <main>
        <div className="card-grid">
          {trucks.map((truck, index) => (
            <FoodTruckCard
              key={index}
              name={truck.name}
              cuisine={truck.cuisine}
              image={truck.image}
              menuUrl={truck.menuUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
