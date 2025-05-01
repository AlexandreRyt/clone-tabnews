import { useState } from 'react';

function Home() {
    const [opened, setOpened] = useState(false);

    const handleOpen = () => {
        setOpened(true);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
            {!opened ? (
                <div>
                    <h1 style={{ color: 'red' }}>Uma Carta Especial</h1>
                    <button 
                        onClick={handleOpen} 
                        style={{
                            backgroundColor: 'pink',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            borderRadius: '5px'
                        }}
                    >
                        Abrir
                    </button>
                </div>
            ) : (
                <h1 style={{ color: 'red' }}>
                    Você é uma amiga incrível e especial, sempre trazendo alegria e inspiração!

                    Obrigado por cada momento que compartilhamos. Sua amizade é um presente precioso e eu sou muito grato por tê-la na minha vida.
                </h1>
            )}
        </div>
    );
}

export default Home;