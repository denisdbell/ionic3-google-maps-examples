import { MapMarker } from '../models/MapMarker';

/*Sample lat lang
Latitude: 18.028363034996826 , longitude: -76.42913818359375
Latitude: 17.99440721713975 , longitude: -76.58843994140625
Latitude: 18.046644225282463 , longitude: -77.0855712890625
Latitude: 18.294557510034192 , longitude: -77.1240234375
Latitude: 18.179778291829212 , longitude: -77.34375
Latitude: 18.025751281356246 , longitude: -77.662353515625
Latitude: 18.140631722312712 , longitude: -77.6239013671875
Latitude: 18.291949733550336 , longitude: -77.85736083984375
Latitude: 18.187606552494625 , longitude: -77.64862060546875
Latitude: 18.427501971948608 , longitude: -77.59918212890625
Latitude: 18.375379094031825 , longitude: -78.08807373046875
Latitude: 18.359739156553683 , longitude: -78.18695068359375 -
Latitude: 18.276302250871954 , longitude: -78.13751220703125
Latitude: 17.897727988564345 , longitude: -77.574462890625
Latitude: 17.816685878972844 , longitude: -77.266845703125
Latitude: 17.72514243272563 , longitude: -77.18170166015625
Latitude: 17.855904414319152 , longitude: -77.4481201171875
Latitude: 17.95260646769184 , longitude: -76.3275146484375
Latitude: 17.929089201618645 , longitude: -76.5802001953125
*/
export const MAPMARKERS: MapMarker[] = [
    {  
        label: "clash_loser",
        icon: "loser.png",
        description: "<h3>Stone Love loses to Mighty Crown</h3>",
        category: "clash_loser",
        latitude: 17.929089201618645, 
        longitude: -76.5802001953125
    },
    {  
        label: "clash_loser",
        icon: "loser.png",
        description: "<h3>Real Man Sounds loses to Original Music</h3>",
        category: "clash_loser",
        latitude: 18.359739156553683, 
        longitude: -78.18695068359375
    },
    {  
        label: "clash_winner",
        icon: "winner.png",
        description: "<h3>Renaissance Beats Super Disco Sound</h3>",
        category: "clash_winner",
        latitude:  17.95260646769184 , 
        longitude: -76.3275146484375
    },
    {  
        label: "clash_winner",
        icon: "winner.png",
        description: "<h3>Optimus Music Beats Emperor Sound System</h3>",
        category: "clash_winner",
        latitude:  17.95260646769184 , 
        longitude: -76.3275146484375
    },
    {  
        label: "promotion",
        icon: "promotion.png",
        description: "<h3>Free Beer</h3>",
        category: "promotion",
        latitude: 7.855904414319152, 
        longitude:-77.4481201171875
    },
    {  
        label: "promotion",
        icon: "promotion.png",
        description: "<h3>Free T-Shirts</h3>",
        category: "promotion",
        latitude: 17.72514243272563, 
        longitude: -77.18170166015625
    },
    {  
        label: "higlight",
        icon: "highlight.png",
        description: "<h3> Super Clash </h3>",
        category: "higlight",
        latitude: 17.816685878972844, 
        longitude: -77.266845703125
    },
    {  
        label: "higlight",
        icon: "highlight.png",
        description: "<h3>Stone Love Vs Mighty Crown</h3>",
        category: "highlight",
        latitude: 17.897727988564345, 
        longitude: 77.574462890625
    },
    {  
        label: "higlight",
        icon: "highlight.png",
        description: "<h3>Stone Love Vs Mighty Crown</h3>",
        category: "highlight",
        latitude: 18.276302250871954, 
        longitude: -78.13751220703125
    }
]
