import React from 'react'

const List = ({texst}) => {
  return (
    <div className="list">
				{texst.map((text)=>{
        return <div key={text.id}>{text.text}</div>
				})}
			</div>
  )
}

export default List