// I would recommend using bootstrap but it's not required
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// define your data here
const mockData = [
];

// display your data from mockData
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