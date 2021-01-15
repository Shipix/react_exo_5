import React, { Component } from 'react'
import Profil from "./Profil"

export default class App extends Component {
  render() {
    return (
      <div>
        <Profil prenom ="Black" nom ="Shipix"></Profil>
        <Profil prenom ="Soleil" nom = "Zeniths"></Profil>
        <Profil prenom ="Time" nom = "Xheu"></Profil>


      </div>
    )
  }
}
