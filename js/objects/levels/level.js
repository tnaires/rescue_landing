var Level = function() {
  var
    GRID = { ROWS: 16, COLUMNS: 20 },

    grid = new Grid(GRID.ROWS, GRID.COLUMNS);

  this.draw = function(context) {
    grid.renderFrom(context, Level.ONE);
  };
};

Level.ONE = [
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '                    ',
  '####################'
];
