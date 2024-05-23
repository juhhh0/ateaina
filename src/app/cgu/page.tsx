import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Ateaina - Conditions Générales d\'Utilisation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan accumsan mollis.',
  }

export default function Page() {
  return (
    <main className="max-width pt-24 px-4 lg:px-0">
      <h2 className="pb-4">Conditions Générales d&apos;Utilisation</h2>
      <p className="font-medium">
        Ateaina publie le site ateaina.fr pour vous informer sur les différents
        projets d&apos;Ateaina. <br/> Les présentes CGU ou Conditions Générales
        d&apos;Utilisation encadrent juridiquement l&apos;utilisation des
        services du site ateaina.fr (ci-après dénommé « le site »). L&apos;accès
        à cette plateforme signifie l&apos;acceptation des présentes CGU.
      </p>
      <h3 className="display text-4xl pt-6 pb-4">Mentions Légales</h3>
      <p className="font-medium">
        L&apos;édition du site ateaina.fr est assurée par la société Kido
        inscrite au RCS sous le numéro XXX XXX XXX, dont le siège social est
        localisé au 25 rue de la tour d&apos;auvergne, 93700, Drancy, France
        Métropolitaine. L&apos;hébergeur du site ateaina.fr est la société OVH,
        sise au X Rue XXXX, 00000 XXXXX, France.
      </p>
      <h3 className="display text-4xl pt-6 pb-4">Accès au site</h3>
      <p className="font-medium">
        Le site est accessible gratuitement depuis n&apos;importe où par tout
        utilisateur disposant d&apos;un accès à Internet. Tous les frais
        nécessaires pour l&apos;accès aux services (matériel informatique,
        connexion Internet…) sont à la charge de l&apos;utilisateur. Pour des
        raisons de maintenance ou autres, l&apos;accès au site peut être
        interrompu ou suspendu par l&apos;éditeur sans préavis ni justification.
      </p>
      <h3 className="display text-4xl pt-6 pb-4">Propriété intellectuelle</h3>
      <p className="font-medium">
        Les marques, logos ainsi que les contenus du site ateaina.fr
        (illustrations graphiques, textes…) sont protégés par le Code de la
        propriété intellectuelle et par le droit d&apos;auteur. La reproduction
        et la copie des contenus par l&apos;Utilisateur requièrent une
        autorisation préalable du site. Dans ce cas, toute utilisation à des
        usages commerciaux ou à des fins publicitaires est proscrite.
      </p>
    </main>
  );
}
