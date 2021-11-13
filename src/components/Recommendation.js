function Recommendation() {
    // eslint-disable-next-line
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth => 2 && currentMonth <= 5

    if (!isSpring) {
        return <div > C 'est pas le moment de rempoter </div>
    }
    return <div > C 'est le printemps, reportez ! 🌾☘ </div>
}

export default Recommendation