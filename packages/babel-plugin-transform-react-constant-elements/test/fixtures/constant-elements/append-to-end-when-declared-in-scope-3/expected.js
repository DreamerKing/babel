var _ref2 = <div>child</div>;

var _ref3 = <p>Parent</p>;

(function () {
  var _ref = <div>
          {_ref3}
          <AppItem />
        </div>;

  class App extends React.Component {
    render() {
      return _ref;
    }
  }

  const AppItem = () => {
    return _ref2;
  };
});
