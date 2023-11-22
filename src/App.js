import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    name: "public static double distance(double x1, double y1, double x2, double y2)",
    items: [
      { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "Calculate distance in radians" },
      { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Use formula provided" },
      { id: "a", name: "Convert to radians"},
      { id: "z", name: "Return result of formula"}
    ],
    tint: 1,
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "public static double[] allDistances(double cx, double cy, double[] x, double[] y)",
    items: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
        name: "Loop over (x,y)",
      },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Create distance array" },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af361", name: "Return distance array" },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af362", name: "Calculate distance at each location" },
    ],
    tint: 2,
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    name: "public static int findMin(double[] distances)",
    items: [
      { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Check if smaller distance" },
      { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Loop over distances" },
      { id: "d3edf796-6449-4931-a777-ff66965a025l", name: "Get bigget distance" },
    ],
    tint: 3,
  },
  {
    id: "public static void main(String[] args)",
    name: "public static int findMin(double[] distances)",
    items: [
      { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacd", name: "Get command-line arguments" },
      { id: "d3edf796-6449-4931-a777-ff66965a025a", name: "Declare arrays" },
      { id: "d3edf796-6449-4931-a777-ff66965a025z", name: "Get all distances" },
      { id: "d3edf796-6449-4931-a777-ff66965a025y", name: "Print out minimum distance" },
    ],
    tint: 3,
  },
];

function App() {

  const [stores, setStores] = useState(DATA);
  
  const handleDragDrop = (results) => {
    const {source, destination, type} = results;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    } 

    if (type === 'group') {
      const reorderedStores = [...stores];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedStore] = reorderedStores.splice(sourceIndex, 1);
      reorderedStores.splice(destinationIndex, 0, removedStore);

      return setStores(reorderedStores);
    }
    const storeSourceIndex = stores.findIndex((store) => store.id === source.droppableId)
    const storeDestinationIndex = stores.findIndex((store) => store.id === destination.droppableId)
    const newSourceItems = [...stores[storeSourceIndex].items]
    const newDesinationItems = source.droppableId !== destination.droppableProps ? [...stores[storeDestinationIndex].items] : newSourceItems
    
    const [deletedItem] = newSourceItems.splice(source.index, 1)
    newDesinationItems.splice(destination.index, 0, deletedItem)

    const newStores = [...stores]

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex], items: newSourceItems
    }

    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex], items: newDesinationItems
    }

    setStores(newStores)
    setStores(newStores)
  
  };

  return (
    <div className="layout__wrapper">
      <div className='card'>
        <DragDropContext onDragEnd={handleDragDrop}>

        <div className='header'>
          <h1>FindEVStations.java</h1>
        </div>
        <Droppable droppableId='ROOT' type='group'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {stores.map((store, index) => (
                <Draggable draggableId={store.id} key={store.id} index={index}>
                  {(provided) => (
                    <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                      <StoreList {...store}/>
                    </div>
                  )}
                  
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
            
          )}
        </Droppable>
        </DragDropContext>

      </div>
    </div>
  );
}

function StoreList ({name, items, id}) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className="store-container">
            <h3>{name}</h3>
        </div>
        <div className="items-container">
          {items.map((item, index) => (
            <Draggable draggableId={item.id} index={index} key={item.id}>
              {(provided) => (
                <div className="item-container" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                  <h4>{item.name}</h4>
                </div>
              )}
            </Draggable> 
          ))}
        </div>
        {provided.placeholder}
      </div>
      )}
    </Droppable>
  )
}

export default App;
