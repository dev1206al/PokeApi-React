import './characterCard.css'

const CharacterCard = (props) => {
    const { character } = props;
    const getTypesString = (types) => {
        return types.map(type => type.type.name).join(', ');
    };
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getBackgroundColor = (types) => {
        const typeColors = {
            water: '#b2f2fb',
            fire: '#fbc1c1',
            grass: '#b8f9b3',
            bug: '#b8f9b3',
            poison: '#ccccff',
            electric: '#ffffcc',
            normal: '#FFDFFD',
            fairy: '#ff99cc',
            fighting: '#b5a28f',
            psychic: '#CFCFC4',
            rock: '#ababab',
            ghost: '#6666ff',
            ground: '#ffcc99',
        };
        // Obtener el color del primer tipo del Pokémon
        const backgroundColor = types.length > 0 ? typeColors[types[0].type.name] : 'rgba(0, 0, 0, 0.5)';

        return backgroundColor;
    };
    return (
        <section className="card mb-3" style={{
            minWidth: 400,
            backgroundColor: getBackgroundColor(character.types)
        }}>
            <div className="row g-0">
                <div className="card-horizontal col-md-4" style={{position: 'relative',}}>
                    <div className='img-background'></div>
                        <img src={character.sprites.front_default}
                        className="card-img img-fluid rounded-start"
                        alt={character.name} />
                
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{capitalizeFirstLetter(character.name)}</h5>
                        <p className="card-text">
                            <b>Tipo:</b> {character.types ? getTypesString(character.types) : 'No type'}
                        </p>
                        <p className="card-text"><b>Número:</b> <span>#</span>{character.id}
                        </p>
                        
                        
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CharacterCard