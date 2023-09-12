import React from "react";
import { useTranslation } from 'react-i18next';

import { Button } from "../Button";

/* NON HO ACCESSO A TUTTI I FIGMA, QUINDI AD OGGI TI DICO CHE VA BENE PER QUELLO CHE C'e' IN DISCOUNTS */
export const Banner = ({ dataBanner, dataButton }) => {

    const { t } = useTranslation();

    return (
        <div className="w-full border rounded-md">
            <div className="w-[60%] mx-auto py-12 text-center">
                <div className="bg-[#ebfff9] w-[50px] h-[50px] flex justify-center items-center rounded-full mx-auto">
                    <div className="bg-[#d6fff2] w-[25px] h-[25px] flex justify-center items-center rounded-full text-[#00b27a]">
                        <dataBanner.icon />
                    </div>
                </div>
                <div className="w-[45%] mx-auto mt-4">
                    <h1 className="text-[#00b27a] text-2xl">
                        {t(`${dataBanner.title}`)}
                    </h1>
                    <p className="mt-4">
                        {t(`${dataBanner.paragraphpart1}`)}
                        <br></br>
                        {t(`${dataBanner.paragraphpart2}`)}
                    </p>
                </div>
                <div>
                    <Button data={dataButton} bgcolor="[#00b27a]" textcolor="black" />
                </div>
            </div>
        </div>
    )
}
