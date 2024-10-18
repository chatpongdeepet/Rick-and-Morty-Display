function Character(character) {
    return (
        <>
            <div className="flex-col justify-center text-center w-40">
                <h3 className="font-semibold">{character.name}</h3>
                <img
                    className="rounded-lg"
                    src={character.image}
                    alt={character.name}
                />
                <p className="text-xs">{`Origin: ${
                    character.origin && character.origin.name
                }`}</p>
            </div>
        </>
    );
}

export default Character;
