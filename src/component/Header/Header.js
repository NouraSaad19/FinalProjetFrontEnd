import React from 'react'
import '../Header/Header.css'
import Missing from '../Missing/Missing'
export default function Header(props) {
  return (
    <div>
           <section className='wrap-header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4 style={{marginLeft:"-20px"}}>{props.title}</h4>
                        <div>
                        <button type='button'><a href='Missing' className='aStyle'>{props.missing}</a></button></div>
                        <button type='button'><a href='Missing' className='aStyle'>{props.missing1}</a></button>
                        <button type='button'><a href='Missing' className='aStyle'>{props.missing2}</a></button>
                        <button type='button'><a href='Missing' className='aStyle'>{props.missing3}</a></button>
                        <button type='button'><a href='Missing' className='aStyle'>{props.missing4}</a></button>
                        <button type='button'><a href='Missing' className='aStyle'>{props.missing5}</a></button>
                        <button type='button'><a href='Missing' className='aStyle'>{props.missing6}</a></button>
                        <button type='button'><a href='Missing' className='aStyle'>{props.missing7}</a></button>
                        <button type='button'><a href='Missing' className='aStyle'>{props.missing8}</a></button>
                    </div>
                    <div className='col-md-6'>
                        <img className='headerImg' src={props.image}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
