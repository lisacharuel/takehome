// I would recommend using bootstrap but it's not required
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// define your data here
const mockData = [
    {
        path: '/imgs/book1.png',
        sku: 'SKU_01', 
        size: 'Large',
        category: 'Book',
        type: 'Type A',
        brand: 'Bookie'
    },
    {
        path: '/imgs/bottle1.jpg',
        sku: 'SKU_02', 
        size: 'Medium',
        category: 'Bottle',
        type: 'Type D',
        brand: 'Hydra'
    },
    {
        path: '/imgs/bottle2.jpg',
        sku: 'SKU_03', 
        size: 'Small',
        category: 'Bottle',
        type: 'Type C',
        brand: 'Hydra'
    },
    {
        path: '/imgs/bottle3.png',
        sku: 'SKU_04', 
        size: 'Large',
        category: 'Bottle',
        type: 'Type D',
        brand: 'HydraPro'
    },
    {
        path: '/imgs/cat1.png',
        sku: 'SKU_05', 
        size: 'Small',
        category: 'Animal',
        type: 'Type A',
        brand: 'PetZone'
    },
    {
        path: '/imgs/cat2.png',
        sku: 'SKU_06', 
        size: 'Small',
        category: 'Animal',
        type: 'Type B',
        brand: 'PetZone'
    },
    {
        path: '/imgs/dog1.png',
        sku: 'SKU_07', 
        size: 'Medium',
        category: 'Animal',
        type: 'Type C',
        brand: 'PetZone'
    }
];


// display your data from mockData
const RenderCardGrid = ({ data }) => {
    return (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {data.map((item, index) => (
                <div key={index} style={{ 
                    border: '1px solid #ccc', 
                    padding: '0',
                    marginBottom: '8px', 
                    width: '300px', 
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative'
                }}
                >
                    
                    <img src={item.path} alt={item.category} style={{ 
                        width: '100%', 
                        height: '100px',
                        objectFit: 'cover' }} />
                    <div style={{fontWeight: 'bold'}}>{item.category}</div>
                    <div>SKU: {item.brand}</div>
                    <div>Size: {item.sku}</div>
                    <div>Type: {item.type}</div>
                    <div>Size: {item.size}</div>
                </div>
            ))}
        </div>
    );
};

function App() {
    return (
        <div className="container">
            <h1>Products</h1>
            <RenderCardGrid data = {mockData}/>
        </div>
    );
}

export default App;
