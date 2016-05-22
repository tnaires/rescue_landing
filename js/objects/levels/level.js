var Level = function(_levelMatrix) {
  var
    grid = new Grid(_levelMatrix);

  this.draw = function(context) {
    grid.render(context);
  };
};

Level.ONE = new Level([
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
]);
