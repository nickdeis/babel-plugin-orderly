var schema = orderly`
object {
  integer {0,200} age;
  object {
    string first;
    string last;
  }* name;
}*;
`;


var arrayAny = orderly`array [any]*;`