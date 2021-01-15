import React, {Component} from 'react';

class Profil extends Component{


    render(){
        return(
    
            <div>
                <h1>Nom: {this.props.nom} </h1>
                <h2>Prenom: {this.props.prenom}</h2>
                <p>Description: </p>
            </div>
        )
    }
    }

export default Profil;