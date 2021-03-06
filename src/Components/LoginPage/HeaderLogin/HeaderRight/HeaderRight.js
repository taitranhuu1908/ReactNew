import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import { acGetUsersRequest } from "./../../../../Actions";

export default function HeaderRight() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const history = useHistory();
  useEffect(() => {
    dispatch(acGetUsersRequest());
  }, []);

  useEffect(() => {
    var uid = localStorage.getItem("username");
    if (users) {
      var index = users.findIndex((user) => user.id === Number(uid));
      if (index !== -1) {
        setUsername(users[index].username);
      }
    }
  }, [users]);

  const onLogOut = () => {
    localStorage.removeItem("username");
    history.push("/global/login");
  };
  return (
    <Fragment>
      <ul className="list-icon justify-content-end">
        <li className="list-item user">
          <Link to="/global/login">
            <i className="fas fa-user"></i>
          </Link>
          {username ? (
            <ul
              className="nav sub rounded"
              style={{ width: "700%", justifyContent: "center" }}
            >
              <li className="nav-item">
                <Link className="" to="/membership/accountinfo">
                  {username}
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn shadow-none" onClick={onLogOut}>
                  LOG OUT
                </button>
              </li>
            </ul>
          ) : (
            ""
          )}
        </li>
        <li className="list-item d-none d-md-block">
          <Link to="/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfYAAABACAYAAADoD1VgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAyPSURBVHja7J3tdaM4FIbfnZP/y1QwTAVhKlhSQZgKgitwXIHtCpxUELuCJRWErSBMBcNWsHSQ/YEYs15/YHSFBHqfc3LmjBML0Md97xVX0m8fHx8wTAAgAhAD+AIghD3uNL77pp5BhzWAFdwgVu3yRf1riwWAwtK1NwAeDZT7GUBlsU5XAJYO9LFc1cMP1cZ5j3oJAbwrOyJBCeCrYXv3c6D7jZVdGjP5BbvsSl+WfCYA6CK8dy3tuWRbQtXvAAA3hh4sAvDQEg9inwhAAuDesTYJLF47MVRuCuCJXe6XI9yu5wLADsC2o8iXAJ4FjXuo2mdr6Jkfhfv0gt1okuRHgt9S/TRUR/pScqLv/seWfRI20CvlNbyrDk5Rty+aqWqPd2Uc2Sb7gRAaKvuB1XvWwdwoO/HSUQRXBwZPl6XB8TYXNv4Zu8wkuWv9NM7b7uDz4kDkcaZ/zVuOsIiwB2qA/qMGTMg2c0LQVy3jSTH/P/eGxYt13s3p/Ilur0NmgtduonbXo/UZuwlRFEq0oyMa23xWSAl7Ix4p690ZGmO5hN1p7jGIiknmrObObbEB8OeF/iodvS4NPIdkm6+FZynI+Hk+YVvmB7/vLewR9lO7FA83CFEnWbywTS6STOQaU2uTtwt9dyE8XiSdu1Rw3FVgjgb5P1mrrx2Onart+PYR9kcl6hHr2Smj+A79rH1fGCKaHmJWYGpEKnI/RakiWSkeHO1TC9hdVUHcpFTiHbQCh0T9P2v3mWuEPVDR4Ib16xQrXJ7GJP8Vj6GcUibRXU+M80tCnyA3RR0LOcMp5HKLcpjL2CfjZ3dgWx4OPr9K2APU02SMQNziBeNb42mbIcU2BpNJ+0a/p+qtguyU/NKRMtrROiGnaCLzRI2RRDm6+bXC3oh6xDp1TtTpaPWLrqZ8vSkQXBDL7NCQWYzaJaP1Lext1kTGw1b9+3YsWu8i7BR1ivqUSDD8KwtOx/dvq3NILgVbWvpum4rROulII+ThgdB3FnaugXaPFUV9VCIbghnyfaP2c/VWQi6Rrm/ULhmtr8GEOdKNAvuZnQxHck5uLggIDZJ7UQzfqZsRCpPcY3w7iBUXIshAOf2/Y38WhDTRhXp7Qv0+PhCK2nNL0XqBfsvbKui9kgiFHJNc89lt92Vpqh73d4fjSaHN7w7L/K7a7vA7CwDBzRkPlgLiFiHqGRTSj1Tz+6WGEUwxviVMXUQjO+I4bSD3uuOPDve4EBoXTdSeX/H3UtF6X9FpjH5fVkJ2/m4CfdnV+zv1u/KMI3A0Yg8GFJBS3fTfjle8Cwy18UzTkZoTuUyLUTFQ/c017zGH3klwKaa96UiF+l1fhmHzcrbYHzg1ZNQuFfhktH1EmpsTHTY0eM0S+9OdSjZBZ1GIDZbfGOUdppmVG2n26Z2AsD/Aj93EKtSJbe9CUXTXiFfqel2i9lhoPFZgwhwxwGHyXAgz51M3gj5DfbbwiqLemQDmXotUqJN2vsLuueguR+tQhr6A3uxFBH8SUQsMm1NQCDpNS6G/6cIz7SAZQthNCcgawDdwR6U+PMLMDErWcrKqiddhoumQFq06s+lgjIkfQsHANTZGoh/HF8abVLRe4vwOe4SICHsI+WVUFerECh/Ew9Vo8xgL1FmVPrRJCr3chLaYv1p0MMaGRN8qr7ye1LT2coBonVPwZBBhXxoY2HdgYohNUTrGDH6dHKV77vruhMj3IYA/exBI9NtrnYMtZF4npSei9kgoWs8xvuWPZITCHhiIJu7A7RFdi9Zn8Ot1SAi5aXgpcfdlJ7pbgTL6TOebjNrnguOQEOPCnghHhlNOxBqKCLLJVlv4l+OgGx0fE3Hd6fgY0z8YJhIKFPKe39kK9Z3wwElMBcpdgwlzZCBhvxcsM4dfU72mSATLquDnOz3d6HgnJDbSDofLhDh/pnpXSo26ltoMaHkhgu8zDmkbyaARuxRrVqsIks7W2HY9k0A3Mi5xfNbp1OdDOhyukqJeTx4KlLXTFNC10POEgtG6j+OQWOAGshuf5GCynAQB5KbhS/i5zFBXPLMLoqPTPqFyprMJ9NMY9davCeReMUhEtk+qD+iOI6mk4hxc7ktGKuzPrFIRIsGyMg/rL4D+LNTugpHWxfWDYSLsz3s+5piEBq89E4psF2ee4ZqoHUL3Qtzry9I4kV92A5nsVZ9FxASSztbOw/pLoJcMWl4YnAX0DoVpBMPlqdkAZrcxPhdpS9mRJkpOLdflFkwm9qUvBy488CfBG8kN3+uHwM/bSDriF6FyKsMG5U2oXaQxOQ0v6cSmIIeiLh3Z2j7nvGK0TmwIu5Qn8xerU4xQqJzC07rT7dO7gfr7A7v6L/GbGRLAEnZfEdp2LIinwi45gIhb+OhszQX6cReHKBMw2BH8ORjmFFuYP0diZck+FeDyNkJhJ4qYVdCbRPP72RV/mzvgiIxZ0L+qSH0I22FjtzdOwZPRCzshLoh6qFnGNcmGr0L37KOovw4cDOQYNrk3A5f+Ego7IdrobupT4rq8BAmhCOBfEl2Kene6DwAvGG6GaqhVCBWjdUJhJ8QNgbxWqCuhqMznJLoU9eqKtwEEvsQwiXTP4KtJMhFhj1idYuRC5XzxqM4SgTL6rPmXmI6PMf2DYbrUwRuAjeHrPBkW3RJ1sh4hkxD2W1anc/jkbA2VDa8b5Z+LXAnwiHqaPjBUfgWz0+ScgidOCLtUdBizOkW9filhDzyor0jAick02kqivbimfU9iOHLPYCaxLQd33yQOcAO5ZJJQiXvOatXmb8GyUkx/La2EKOpsvZupSFN3/CQOCUMO4K6j4xihnrFLBB3JFMAPg313BuCngTKJm4HSbsBrOSHsPyC35OaBwi5mVKVOlZp7IOypQBk6EWIgOH7GFPEVrf7aCFuq+m4oUP4S9dK4ysC9l6h3hZMaZ2swYc5lYV/5FrFLikjKDi5qMCUIVbtsJ1pXUlFi7NCzVCNuj61yTjYCDleAeibElFF+Us6UrhNSgTvMEYdo3rFLGpIXVqs2lbC4LzHdd+1TezedTqT/Sh1f+WD4PiWCkALcD544JuyA7PR5DGb4SiD5TiiE3KyMS4SY3s5tU9litkI9eyfRxiHNASHXC/urcLkbcF27LplweY8TdLiSCbZ7OKGxI9WHaUsI6SHsW8hOJQWoN5vggOxPCflExKk5XFM9QGVKzyXRh2lHCOkh7I24S0Jx12dnqE1ih56xr0MZYbpTtAn82H+AEGJY2E3sodwIScKq7sUW8isMmjZ5dOQZC0a1R9uIY4YQoi3sJcwsiQpQbxG5YRTSi7WhcjdK4Mca9U5d+KaS7R9zCBNiT9gbEakMXesR9U5PKwq89ai9bXSbNukj8LbaMfWgD8UY/6uGlMOXEPvCXsLssYYB6mVXP1Gvd086Gi/f18ab3qqyaZM/lTHu0iYp7OVP+LKv+phfNwSQ2++9BCGkMzdHPlsBuDdstAMlDG2PvjgxWxAxwv91uERi+DrJwTXKE0Y1tBhNhvBnejfBOE8Li5QzLjVuKeyEaAp7EyG+WzAG5HzUHg/s5NgU8HMzBRKsDd7j75BJTgzh1sEwXcbwHPJT8DmHPyH6wl6oSGHDKnKGCsB31AlvPiMxDb+F+UMhEiGnyNbBMAEuz4xE6u9uYW75IUWdDNGXTdjrwjVhB+pDDW7BBBiXyD13uGIh8Xgd4F4zoag9gZ2DYSJHnMhXDnsywr6c4/Kxx8b4dOH3M5teBznpcG0ZrfemHCgCltxcyFfnuvK4rxNiTNihvA6Ku1vMPDR4AWSSB7OB7reAXNLX3NN+/gyemkaIEWGvKO4UdwdIIJM4+DzgPUtdK4R/yaUleMY5IcaEvRH3b+C0mIvivvbkWSWiVskoeujZgbmHfZvROiEGhb092BasNqdYoc6Wn7IRlIpYdwPfdwm5ma4E/uznMAOz4QkZTNiBenrsG7hphEtkqk2magylotWthXuXciYC+HEwjI/5I4RYF3aoKOQb/JkGHgMl6lyIxQSjdwlByyzVSyZY1sPE+y9f9xFiUdihjOQKwFcORqd4Um1i8kCfoUU9dChy7iNYuVBZMaZ5Bv1aiXrB4UuIXWFvG66ZEpMnMOHFBdpO1xrjfm1yL1QfmcVnkHQq5hPqo40TuqLdIMQtYW8L/ALAZyX0GQerUwL/HWaPgDVBAJnNWTLLzyF5/WTk/XGr+uJnZS9KDlNCZLkxVO4W++n5CPUU4i322c3BCOuqEHJ+bIpL1mqTCPs9vl1tk1SonGfLz9HMGEiIcohxHAyTq3//wv51BEWckAH4dwAPUNUIRz2eOgAAAABJRU5ErkJggg=="
              alt=""
            />
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}
