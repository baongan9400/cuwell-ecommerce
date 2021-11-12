import { createBrowserHistory } from "history";
import store from "store/store";
import { checkJWTExpAction } from "./redux/actions/login/authAction";

const history = createBrowserHistory();
history.listen((location) => {
  store.dispatch(checkJWTExpAction(location));
});
export default history;
