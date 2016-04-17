(function(app) {
    function AppView() {
        owl.View.call(this, {
            el: document.querySelector('html')
        });
        // update links to data-element
        // and update special events (submit, focus, blur)
        this.update();
    }
    AppView.prototype = Object.create(owl.View.prototype);
    AppView.prototype.showMain = function(view) {
        this.elements.main.display = 'block';
        this.elements.error.display = 'none';
        this.elements.main.innerHTML = '';
        this.elements.main.appendChild(view.el);
    };
    AppView.prototype.showError = function() {
        this.elements.main.display = 'none';
        this.elements.error.display = 'block';
    };
    app.AppView = AppView;
})(app);