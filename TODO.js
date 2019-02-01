// Need to zoom product - add this in modal window


Object.keys(data.places).map((keyPlace) => {
    return <div key={keyPlace}>
        {keyPlace}
        {Object.keys(data.places[keyPlace]).map(keySize => {
            return <div key={keySize}>
                {keySize}
                {Object.keys(data.places[keyPlace][keySize]).map(keyColor => {
                    return <div key={keyColor}>
                        {`${keyColor}: ${data.places[keyPlace][keySize][keyColor]}`}
                    </div>
                })}
            </div>
        })}
    </div>
})