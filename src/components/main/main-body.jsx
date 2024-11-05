import "./main-body.css";

const Main = () => {
  return (
    <div className="space">
      <h1 className="title">Lorem, ipsum dolor sit</h1>
      <h3 className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. EaВue,
        veritatis ad.
      </h3>
      <div className="label__input">
        <label className="label">Почта:</label>
        <input type="email" className="input" placeholder="введите почту" />
      </div>
      <p className="paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
        veritatis ad. Ullam asperiores eligendi minima totam ratione sit
        molestias amet veritatis sed ut? Voluptatibus tempore sed voluptate
        perspiciatis, magnam molestias.
      </p>
      <button className="button">Сохранить</button>
    </div>
  );
};

export default Main;
