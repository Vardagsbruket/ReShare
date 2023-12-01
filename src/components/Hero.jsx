
export const Hero = () => {
  return (
    <section className='hero-container'>
        <h1>Sharing items locally made simple.</h1>
        <p>Share or donate items you no longer need, contributing to the well-being of your local community. If you find yourself in need of something, asking to borrow has never been simpler.</p>
        <form>
            <label htmlFor="city">Select a city to view location-based posts</label>
            <select id="city">
                <option value="Stockholm">Stockholm</option>
                <option value="Uppsala">Uppsala</option>
                <option value="Göteborg">Göteborg</option>
                <option value="Örebro">Örebro</option>
            </select>
        </form>
    </section>
  )
}
