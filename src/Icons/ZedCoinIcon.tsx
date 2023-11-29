import React from 'react';
import { SvgXml, XmlProps } from 'react-native-svg';

interface Props extends Omit<XmlProps, 'xml'> {
  size: number;
  color: string;
}

const ZedCoinIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <SvgXml
      xml={`
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 11 11" fill="none">
        <path d="M2.08443 2.94099C2.05386 2.94675 2.0269 2.94393 2.00028 2.94178C1.87123 2.93141 1.74138 2.93524 1.60963 2.92012C1.60963 2.90884 1.60906 2.90016 1.60963 2.8917C1.62282 2.71899 1.63614 2.54639 1.64956 2.3738C1.66242 2.20831 1.67596 2.04293 1.68814 1.87744C1.69762 1.74975 1.70529 1.62182 1.71409 1.49412C1.72311 1.3627 1.73247 1.2314 1.74138 1.09997C1.74567 1.03703 1.74996 0.973969 1.75334 0.910909C1.76214 0.747 1.77083 0.582978 1.77895 0.419068C1.78527 0.292949 1.79068 0.166718 1.79655 0.0405987C1.797 0.029882 1.79847 0.0191653 1.79971 0.00653081C1.80625 0.00427466 1.81279 0.000213589 1.81922 0.000213589C1.93474 -0.000124834 2.05014 -1.20263e-05 2.16565 0.000213589C2.16904 0.000213589 2.17254 0.0019057 2.17919 0.00371062C2.18551 0.0136377 2.19284 0.0258209 2.20085 0.0375529C2.23424 0.086737 2.26526 0.137839 2.30193 0.184428C2.38506 0.290129 2.49641 0.349579 2.62839 0.367966C2.7033 0.378345 2.77899 0.383308 2.85457 0.387933C2.90488 0.390979 2.95553 0.389625 3.00607 0.389625C5.15686 0.389625 7.30765 0.389625 9.45844 0.389625H9.53233C9.5585 0.420196 9.63498 0.555904 9.6651 0.62528C9.57756 0.748015 9.48608 0.87075 9.39583 0.9945C9.30649 1.1169 9.2168 1.23907 9.12735 1.36135C9.03676 1.4851 8.94629 1.60885 8.85571 1.7326C8.76524 1.85635 8.67465 1.98021 8.58418 2.10396C8.49371 2.22771 8.40312 2.35146 8.31265 2.47532C8.2232 2.59761 8.13385 2.72 8.04439 2.8424C7.95392 2.96626 7.86345 3.09001 7.77298 3.21388C7.68262 3.33774 7.59226 3.46171 7.50202 3.58558C7.41279 3.70809 7.32344 3.83048 7.23432 3.95299C7.14419 4.07674 7.05417 4.2006 6.96099 4.32864C6.97363 4.33214 6.98141 4.33609 6.98908 4.3362C7.04323 4.33676 7.09738 4.33665 7.15141 4.33665C7.30844 4.33665 7.46535 4.33654 7.62238 4.33688C7.6419 4.33688 7.66209 4.33315 7.68059 4.3424C7.68962 4.37929 7.69187 4.59509 7.68386 4.67406C7.67495 4.67586 7.66502 4.67902 7.65487 4.6797C7.63874 4.68071 7.62238 4.68004 7.60614 4.68004C7.32649 4.68004 7.04684 4.68004 6.76708 4.68004H6.70537C6.57034 4.86606 6.43587 5.05129 6.30411 5.23279C6.29847 5.23629 6.29712 5.23753 6.29543 5.2381C6.29373 5.23877 6.29193 5.23934 6.29012 5.23934C5.73263 5.23979 5.17502 5.24013 4.61753 5.24035C4.6085 5.24035 4.59959 5.23945 4.59057 5.23866C4.5891 5.23855 4.58775 5.23708 4.58504 5.23528C4.58132 5.21711 4.59677 5.20696 4.60557 5.19478C4.71691 5.04158 4.82882 4.88873 4.94049 4.73576C4.95099 4.72132 4.96069 4.70643 4.97355 4.68771C4.96193 4.68444 4.95437 4.68094 4.94659 4.68049C4.92854 4.67958 4.91049 4.68004 4.89244 4.68004C4.25553 4.68004 3.61862 4.68004 2.98159 4.68004C2.95835 4.68004 2.93511 4.67958 2.91097 4.67936C2.89902 4.64089 2.90567 4.60479 2.90454 4.56937C2.90342 4.53147 2.90432 4.49357 2.90432 4.45566C2.90432 4.41979 2.90432 4.38392 2.90432 4.34534C2.91673 4.34206 2.92643 4.33789 2.93636 4.33721C2.95429 4.33597 2.97245 4.33665 2.9905 4.33665C3.71225 4.33665 4.43399 4.33676 5.15573 4.33642C5.25038 4.33642 5.22342 4.34782 5.27768 4.27325C6.05797 3.2035 6.83442 2.13092 7.60445 1.05372C7.61584 1.03782 7.62667 1.02146 7.63671 1.00668C7.63197 0.992131 7.62171 0.994951 7.61347 0.994612C7.59723 0.994048 7.58098 0.994387 7.56474 0.994387C6.67164 0.994387 5.77843 0.994387 4.88533 0.994387C4.74996 0.994387 4.61459 0.993372 4.47934 0.997094C4.28463 1.0024 4.08981 1.00883 3.89533 1.02022C3.72251 1.03026 3.55037 1.04853 3.38014 1.08226C3.28809 1.10054 3.19762 1.12423 3.10963 1.15728C2.95531 1.21526 2.82772 1.30889 2.72868 1.44088C2.62456 1.57975 2.53375 1.72696 2.45828 1.88331C2.3537 2.09968 2.27135 2.32473 2.19927 2.5535C2.16407 2.66518 2.13271 2.7781 2.09944 2.89034C2.09481 2.9058 2.08985 2.92114 2.08376 2.94066L2.08443 2.94099Z" fill="${color}"/>
        <path d="M5.28904 6.63063C5.25429 6.68669 5.21887 6.73182 5.18582 6.77863C5.15254 6.82578 5.1187 6.87249 5.08508 6.91942C5.05147 6.96634 5.01785 7.01327 4.98423 7.0602C4.95062 7.10713 4.917 7.15405 4.8835 7.20098C4.84988 7.24791 4.81638 7.29495 4.78287 7.34188C4.75038 7.38734 4.71778 7.4328 4.68529 7.47838C4.65179 7.52531 4.61829 7.57235 4.58478 7.61939C4.55128 7.66643 4.51777 7.71336 4.48427 7.7604C4.45077 7.80744 4.41726 7.85436 4.38376 7.90141C4.35025 7.94845 4.31686 7.99549 4.28347 8.04253C4.25008 8.08957 4.21669 8.13672 4.1833 8.18376C4.14991 8.2308 4.11652 8.27784 4.08313 8.325C4.04974 8.37204 4.01646 8.41919 3.98307 8.46635C3.94967 8.5135 3.9164 8.56054 3.88312 8.60769C3.84984 8.65485 3.81656 8.702 3.78317 8.74915C3.74989 8.79631 3.7165 8.84346 3.68322 8.89062C3.65096 8.9363 3.61881 8.9821 3.58666 9.02779C3.55338 9.07494 3.52022 9.12221 3.48705 9.16936C3.45389 9.21663 3.42072 9.26378 3.38755 9.31105C3.35439 9.35832 3.32122 9.40558 3.28806 9.45274C3.25489 9.5 3.22161 9.54716 3.18879 9.59453C3.1563 9.64135 3.12201 9.68715 3.0885 9.74028C3.11648 9.74513 3.13712 9.74998 3.1581 9.75201C3.24609 9.76036 3.33397 9.76939 3.42219 9.77537C3.58959 9.78653 3.757 9.79657 3.92452 9.8056C4.02717 9.81113 4.12994 9.81541 4.23271 9.81756C4.53391 9.82399 4.8351 9.83008 5.1363 9.83436C5.34917 9.83741 5.56203 9.83921 5.7749 9.83809C6.00943 9.83685 6.24396 9.83335 6.47837 9.82748C6.63517 9.82365 6.79209 9.81598 6.94866 9.8065C7.13401 9.79533 7.31912 9.77931 7.50311 9.75314C7.70854 9.72392 7.9117 9.68399 8.10788 9.61405C8.31612 9.53982 8.5036 9.43141 8.66187 9.27551C8.74693 9.1917 8.82138 9.09886 8.89144 9.00241C9.02421 8.81932 9.13386 8.62258 9.23279 8.41976C9.35068 8.17812 9.45198 7.92949 9.54741 7.67838C9.55632 7.65492 9.56557 7.63168 9.5755 7.60608C9.62909 7.60777 9.67872 7.62401 9.72937 7.63326C9.7807 7.64262 9.8318 7.65413 9.8829 7.66474C9.93389 7.67523 9.98488 7.68572 10.0367 7.69643C10.0417 7.71945 10.0349 7.73862 10.0312 7.75724C9.97089 8.06306 9.91031 8.36899 9.84883 8.67459C9.75317 9.14985 9.6583 9.62522 9.54606 10.097C9.52316 10.1933 9.4971 10.2891 9.47228 10.385C9.46969 10.3952 9.46551 10.4051 9.46123 10.4172C9.44814 10.4186 9.43607 10.4204 9.42378 10.421C9.40934 10.4216 9.3949 10.4212 9.38046 10.4212C6.64172 10.4212 3.90297 10.4212 1.16423 10.4212C1.13919 10.4212 1.11414 10.4209 1.08707 10.4206C1.04082 10.3388 0.995695 10.2591 0.949219 10.1768C1.81423 8.99327 2.6816 7.81353 3.54391 6.63807C3.5509 6.63288 3.55225 6.63164 3.55383 6.63085C3.55541 6.63006 3.5571 6.62916 3.5588 6.62916C4.12532 6.6286 4.69172 6.62815 5.25824 6.62781C5.26524 6.62781 5.27223 6.62905 5.28893 6.63074L5.28904 6.63063Z" fill="${color}"/>
        <path d="M7.67908 5.74817C7.68529 5.82477 7.68314 6.03741 7.67603 6.07723C7.67468 6.07858 7.67367 6.08016 7.6722 6.08106C7.67073 6.08185 7.6687 6.08231 7.66701 6.08231C6.08827 6.08287 4.50953 6.08332 2.93078 6.08366C2.92368 6.08366 2.91646 6.08219 2.90946 6.08106C2.908 6.08084 2.90676 6.07892 2.901 6.0743C2.89638 6.04102 2.89954 6.00334 2.89897 5.966C2.89841 5.9299 2.89852 5.8938 2.89897 5.85771C2.89942 5.82025 2.8966 5.78258 2.90078 5.74975C2.90608 5.74433 2.90721 5.74275 2.90867 5.74185C2.91014 5.74106 2.91217 5.74061 2.91386 5.74061C4.4926 5.74005 6.07135 5.7396 7.65009 5.73926C7.6572 5.73926 7.66441 5.74061 7.67152 5.74174C7.67299 5.74197 7.67423 5.74388 7.67919 5.74828L7.67908 5.74817Z" fill="${color}"/>
      </svg>
      `}
    />
  )
}

export default ZedCoinIcon;