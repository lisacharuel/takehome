// no filter and no search
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Local data array to mock Supabase data
const mockData = [
];

// Function to render a grid of cards based on the data
const RenderCardGrid = () => {
    return (
      <div>return your cards here</div>
    );
};

function App() {
    return (
        <div className="container">
            {RenderCardGrid()}
        </div>
    );
}

export default App;
