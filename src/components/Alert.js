import React from 'react';

export default function Alert(props) {
    //this method will not allow anything to render if props value is null;
    if (!props.alert) {
        return null;
    }
    return (
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>
            {console.log('TYPED')}
        </div>
    );
}
