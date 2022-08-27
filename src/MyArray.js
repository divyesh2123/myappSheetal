import React from 'react'

 function MyArray(data) {

    console.log(data);
  return (
    <div>MyArray</div>
  )
}

export default React.memo(MyArray,(pre,curr) => {
    if(pre.data.length == curr.data.length)
    {
        return true;
    }

});
