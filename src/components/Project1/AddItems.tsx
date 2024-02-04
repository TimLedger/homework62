import MenuItem from './MenuItem';
import './AddItems.css';

interface AddItemsProps {
  addItem: (item: { name: string; price: number }) => void;
}

function AddItems({ addItem }: AddItemsProps) {
  const menuItems = [
    { name: 'Гамбургер', price: 65, imageSrc: '../src/components/Project1/images/hamburgerImage.webp' }, 
    { name: 'Чикенбургер', price: 62, imageSrc: '../src/components/Project1/images/chickenburgerImage.webp' },
    { name: 'Чизбургер', price: 78, imageSrc: '../src/components/Project1/images/cheeseburgerImage.webp' },
    { name: 'Чикен Премьер', price: 173, imageSrc: '../src/components/Project1/images/chickenPremierImage.webp' },
    { name: 'БигМак', price: 299, imageSrc: '../src/components/Project1/images/bigSpecialImage.webp' },
    { name: 'Фри', price: 65, imageSrc: '../src/components/Project1/images/friesImage.webp' },
    { name: 'Стрипсы', price: 115, imageSrc: '../src/components/Project1/images/stripsImage.webp' },
    { name: 'Наггетсы', price: 59, imageSrc: '../src/components/Project1/images/nuggetsImage.webp' }, 
    { name: 'Кока-Кола', price: 89, imageSrc: '../src/components/Project1/images/cocaColaImage.webp' }, 
    { name: 'Капучино', price: 109, imageSrc: '../src/components/Project1/images/cappuccinoImage.webp' }, 
    { name: 'Клубничный милкшейк', price: 89, imageSrc: '../src/components/Project1/images/cocktailStrawberryImage.webp' }, 
    { name: 'Апельсиновый сок', price: 92, imageSrc: '../src/components/Project1/images/orangeJuiceImage.webp' },  
  ];

  return (
    <div className="add-items">
      <h2>Меню</h2>
      {menuItems.map((item) => (
        <MenuItem key={item.name} item={item} onAdd={addItem} />
      ))}
    </div>
  );
}
 
export default AddItems;
