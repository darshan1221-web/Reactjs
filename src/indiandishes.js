import ReactDOM from 'react-dom/client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class DishDetails extends React.Component {
  
constructor(props) {
    super(props);
    this.name = props.name;
    this.description = props.description;
    this.ingredients = props.ingredients;
    this.index = props.index;
}
  render() {
    return(
       <div className="col-md-8 col-lg-6 my-3 ">
      {/* Dish Card */}
      <div className="card shadow-lg ">
        <div className="row g-0 ">
          {/* Dish Name */}
          <div className="col-md-4 w-100 h-100 bg-warning d-flex align-items-center justify-content-center text-center p-3">
            <h4 className="fw-bold m-0">{this.name}</h4>
          </div>
          {/* Dish Details */}
          <div className="col-md-8">
            <div className="card-body">
              <p className="mb-3">
               {this.description}
              </p>
              <div>
                <h5 className="fw-bold">Ingredients:</h5>
                <ul className="list-unstyled mb-0">
                  {this.ingredients.map((item, index) => (
                    <li key={index} className="mb-1">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const indianVegDishes = [
  {
    name: "Paneer Butter Masala",
    description:
      "A rich and creamy North Indian curry made with paneer cooked in a tomato-butter gravy.",
    ingredients: [
      "paneer",
      "tomato",
      "butter",
      "cream",
      "onion",
      "ginger garlic",
      "garam masala",
      "kasuri methi"
    ]
  },
  {
    name: "Masala Dosa",
    description:
      "A crispy fermented rice crepe filled with spiced potato masala, popular in South India.",
    ingredients: [
      "rice",
      "urad dal",
      "potato",
      "onion",
      "mustard seeds",
      "curry leaves",
      "green chilli",
      "turmeric"
    ]
  },
  {
    name: "Chole Bhature",
    description:
      "A Punjabi dish of spicy chickpea curry served with deep-fried bread.",
    ingredients: [
      "chickpeas",
      "onion",
      "tomato",
      "ginger garlic",
      "chole masala",
      "flour",
      "yogurt",
      "oil"
    ]
  },
  {
    name: "Dal Makhani",
    description:
      "A slow-cooked lentil dish made with black lentils, butter, and cream.",
    ingredients: [
      "black lentils",
      "kidney beans",
      "butter",
      "cream",
      "tomato",
      "ginger garlic",
      "garam masala"
    ]
  },
  {
    name: "Palak Paneer",
    description:
      "Paneer cubes cooked in a smooth spinach gravy with mild spices.",
    ingredients: [
      "paneer",
      "spinach",
      "onion",
      "tomato",
      "ginger garlic",
      "cream",
      "garam masala"
    ]
  },
  {
    name: "Rajma Chawal",
    description:
      "A comforting North Indian meal of red kidney bean curry served with rice.",
    ingredients: [
      "kidney beans",
      "rice",
      "onion",
      "tomato",
      "ginger garlic",
      "cumin",
      "garam masala"
    ]
  },
  {
    name: "Vegetable Biryani",
    description:
      "A fragrant rice dish cooked with mixed vegetables and aromatic spices.",
    ingredients: [
      "basmati rice",
      "mixed vegetables",
      "yogurt",
      "onion",
      "ginger garlic",
      "biryani masala",
      "mint"
    ]
  },
  {
    name: "Aloo Paratha",
    description:
      "A stuffed Indian flatbread filled with spiced mashed potatoes.",
    ingredients: [
      "wheat flour",
      "potato",
      "green chilli",
      "coriander",
      "cumin",
      "butter",
      "salt"
    ]
  },
  {
    name: "Pav Bhaji",
    description:
      "A Mumbai street food made of mashed vegetables cooked in butter and spices, served with bread rolls.",
    ingredients: [
      "potato",
      "tomato",
      "peas",
      "capsicum",
      "butter",
      "pav bhaji masala",
      "bread rolls"
    ]
  },
  {
    name: "Idli Sambar",
    description:
      "Soft steamed rice cakes served with lentil-vegetable stew.",
    ingredients: [
      "rice",
      "urad dal",
      "toor dal",
      "vegetables",
      "tamarind",
      "sambar powder",
      "mustard seeds"
    ]
  }
];

function Indiandishes(){
  return(
    <div className="container py-5">
  <div className="row justify-content-center">
 { indianVegDishes.map((dish, index) => {
    return <DishDetails 
    name={dish.name} 
    description={dish.description} 
    ingredients={dish.ingredients} 
    index={index} />
  })  }  

  </div>
</div>

  )
}

root.render(<Indiandishes />)