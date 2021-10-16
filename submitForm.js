
         function getFormData(parent){
                 var array=[];     
                 $(parent).find("input,select").each(function() {                    
                  var item={
                  name:$(this).attr("name"),
                  value:$(this).val()
                  };
                  array.push(item);
                 });

               let mapped = array.reduce (function (map, obj) { 
                map[obj.name] = obj.value; 
                return map;
              },{}); // reduce
                console.log(mapped)
                 // then to get the JSON string
                 return mapped;
             }
