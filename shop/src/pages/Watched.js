function Watched(props) {

  let watchedAll = JSON.parse(localStorage.getItem('watched')).reverse();

  return (
    <div className="watched">
      <p>최근 본 상품</p>
      {
        watchedAll !== null
        ? watchedAll.map((watched, i)=>{
            return (
              <div className="watched-item" key={i}>
                <img src={`https://codingapple1.github.io/shop/shoes${watched+1}.jpg`}
                alt="item" onClick={()=>{ props.navigate('detail/'+watchedAll[i]) }} />
                <p className="title">{ props.shoes.title }</p>
              </div>
            )
          })
        : null
      }
    </div>
  )
}

export default Watched;