import React from 'react'
import PictureBox from './PictureBox'

export default function DetailBox() {
    return (
        <>
            <PictureBox />
            <div className="span7">
                <h3>Name of the Item [$140.00]</h3>
                <hr className="soft" />

                <form className="form-horizontal qtyFrm">
                    <div className="control-group">
                        <label className="control-label"><span>$140.00</span></label>
                        <div className="controls">
                            <input type="number" className="span6" placeholder="Qty." />
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label"><span>Color</span></label>
                        <div className="controls">
                            <select className="span11">
                                <option>Red</option>
                                <option>Purple</option>
                                <option>Pink</option>
                                <option>Red</option>
                            </select>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label"><span>Materials</span></label>
                        <div className="controls">
                            <select className="span11">
                                <option>Material 1</option>
                                <option>Material 2</option>
                                <option>Material 3</option>
                                <option>Material 4</option>
                            </select>
                        </div>
                    </div>
                    <h4>100 items in stock</h4>
                    <p>Nowadays the lingerie industry is one of the most successful business spheres.
                        Nowadays the lingerie industry is one of ...
                    </p>
                    <p>
                        <button type="submit" className="shopBtn"><span className=" icon-shopping-cart"></span> Add to cart</button>
                    </p>
                </form>
            </div>
        </>

    );
}
