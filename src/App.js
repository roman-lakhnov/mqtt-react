import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div>
      <h2>Сторінка налаштувань функції MQTT</h2>
      <form action="settings_MQTT.cgi" method="post" target="_blank">
        <fieldset className="pick-variant">
          <legend className="r">Налаштування:</legend>
          <label htmlFor="Enable">Увімкнути функцію MQTT:</label>
          <input type="radio" name="MQTT" value="on" defaultChecked className="bred" /> Так
          <input type="radio" name="MQTT" value="off" className="bred" /> Ні<br /><br />
          <label htmlFor="login" className="p">Логін:</label>
          <input type="text" id="login" name="login" maxLength="30" className="q" /><br /><br />
          <label htmlFor="pass" className="p">Пароль:</label>
          <input type="password" id="pass" name="pass" maxLength="30" className="q" /><br /><br />
          <label htmlFor="ip_addr" className="p">IP Адреса серверу:</label>
          <input type="text" id="ip_addr" name="ip_addr" minLength="7" maxLength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" className="q" /><br /><br />
          <label htmlFor="port" className="p">Порт серверу:</label>
          <input type="number" id="port" name="port" min="1" max="65535" placeholder="за замовченням 1883" className="q" /><br /><br />
          <input type="submit" value="Застосувати" className="button bgrn" />
        </fieldset>
      </form>
    </div>
  );
};

export default App;