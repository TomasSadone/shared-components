import React from "react";

/*
    Utilizziamo queste props = { children, disabled = false, variant, size, onClick }

    @Params children => ci permette di considerare testo e icona testo ( destra o sinista che sia )
    @Params disabled => Stato del button
    @Params variant => Variante del button, primary, secondary ecc e con delle variabili css vai a definire lo stile di ogni variante
    cos' dovrebbe essere super generico, bisognerebbe testare però.

    @Params size => Size del button, lg, xl, sm, xs eccc
    @Params onclick => sarebbe la funzione da attivare quando clicchiamo sul btn


*/
export const Button = ({ data, textcolor, bgcolor }) => {

    return (

        <button className={`h-11 mb-3 rounded-md pop600 text-${textcolor} bg-${bgcolor}`}>

            {data.text}

        </button>

    );
}
