'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (app, owl) {
    var TodoItemCollection = function (_owl$Collection) {
        _inherits(TodoItemCollection, _owl$Collection);

        function TodoItemCollection(data) {
            _classCallCheck(this, TodoItemCollection);

            return _possibleConstructorReturn(this, (TodoItemCollection.__proto__ || Object.getPrototypeOf(TodoItemCollection)).call(this, data, {
                url: 'todo/items',
                model: app.TodoItemModel
            }));
        }

        return TodoItemCollection;
    }(owl.Collection);

    app.TodoItemCollection = TodoItemCollection;
})(app, owl);