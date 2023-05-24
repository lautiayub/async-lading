const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCWjzIoNgSM1g9O6k4Cd4cyQ&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById("content")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c646bb5dfdmshe06cdca8ce4d18ap17d944jsn538c0b88fcf2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
async function fetchData(urlApi){
    const response =await fetch(urlApi,options);
    const data = await response.json();
    return data
}

/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/

(async()=>{
    try{
        const videos= await fetchData(url);
        let view = `
        ${videos.items.map(video=>`
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `).slice(0,4).join("")}
`;
content.innerHTML=view;
    } catch(error){
        console.log(error)
    }
})();





/*{
  "kind": "youtube#searchListResponse",
  "nextPageToken": "CAkQAA",
  "regionCode": "DE",
  "pageInfo": {
    "totalResults": 394,
    "resultsPerPage": 9
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "H2cANxxb9fU"
      },
      "snippet": {
        "publishedAt": "2023-05-22T17:48:08Z",
        "channelId": "UCWjzIoNgSM1g9O6k4Cd4cyQ",
        "title": "SECRETO Bien GUARDADO #funny #comedy #standup #shorts",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/H2cANxxb9fU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/H2cANxxb9fU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/H2cANxxb9fU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nicolas de Tracy",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-22T17:48:08Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "kkWU7S9wg_M"
      },
      "snippet": {
        "publishedAt": "2023-05-21T23:00:16Z",
        "channelId": "UCWjzIoNgSM1g9O6k4Cd4cyQ",
        "title": "SOBREVIVÍ para CONTARLA - Anécdotas #136",
        "description": "Les dejo el Capítulo 136 de #Anécdotas , ​ un espacio donde cuento anécdotas de la gente. Si quieren participar mándenme su ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/kkWU7S9wg_M/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/kkWU7S9wg_M/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/kkWU7S9wg_M/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nicolas de Tracy",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-21T23:00:16Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "wOh7dYzPkvM"
      },
      "snippet": {
        "publishedAt": "2023-05-18T23:29:59Z",
        "channelId": "UCWjzIoNgSM1g9O6k4Cd4cyQ",
        "title": "CHETO OKUPA En El SHOW Feat. @Elplandelamariposa",
        "description": "SHOW NUEVO CRÓNICO . MAYO LOMAS DE ZAMORA - Jueves 18 de Mayo (AGOTADO) LUJAN- Viernes 19 de Mayo ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wOh7dYzPkvM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wOh7dYzPkvM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wOh7dYzPkvM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nicolas de Tracy",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-18T23:29:59Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "jZL2siprCrs"
      },
      "snippet": {
        "publishedAt": "2023-05-16T16:35:01Z",
        "channelId": "UCWjzIoNgSM1g9O6k4Cd4cyQ",
        "title": "PREGUNTA en ROSARIO #funny #standup #comedy #shorts #rosario",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jZL2siprCrs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jZL2siprCrs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jZL2siprCrs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nicolas de Tracy",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-16T16:35:01Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "Q8OvawPmJUU"
      },
      "snippet": {
        "publishedAt": "2023-05-14T23:00:09Z",
        "channelId": "UCWjzIoNgSM1g9O6k4Cd4cyQ",
        "title": "Amiga, DATE CUENTA - Anécdotas #135",
        "description": "Les dejo el Capítulo 135 de #Anécdotas , ​ un espacio donde cuento anécdotas de la gente. Si quieren participar mándenme su ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Q8OvawPmJUU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Q8OvawPmJUU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Q8OvawPmJUU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nicolas de Tracy",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-14T23:00:09Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "acaq4JPT39k"
      },
      "snippet": {
        "publishedAt": "2023-05-12T16:39:25Z",
        "channelId": "UCWjzIoNgSM1g9O6k4Cd4cyQ",
        "title": "Milico PORRERO En El SHOW- Vlogsito #171",
        "description": "SHOW NUEVO CRÓNICO . MAYO PILAR- Sábado 10 de Mayo (AGOTADO) LOMAS DE ZAMORA - Jueves 18 de Mayo ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/acaq4JPT39k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/acaq4JPT39k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/acaq4JPT39k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nicolas de Tracy",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-12T16:39:25Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "I-ORHhpRbUE"
      },
      "snippet": {
        "publishedAt": "2023-05-09T00:34:02Z",
        "channelId": "UCWjzIoNgSM1g9O6k4Cd4cyQ",
        "title": "Cuando Tenes un Perro 🐕 de Raza #perros #funny #standup #comedy #shorts",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/I-ORHhpRbUE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/I-ORHhpRbUE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/I-ORHhpRbUE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nicolas de Tracy",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-09T00:34:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "eQ6L_-tz11U"
      },
      "snippet": {
        "publishedAt": "2023-05-07T23:00:15Z",
        "channelId": "UCWjzIoNgSM1g9O6k4Cd4cyQ",
        "title": "Serie de EVENTOS DESAFORTUNADOS - Anécdotas #134",
        "description": "Les dejo el Capítulo 134 de #Anécdotas , ​ un espacio donde cuento anécdotas de la gente. Si quieren participar mándenme su ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/eQ6L_-tz11U/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/eQ6L_-tz11U/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/eQ6L_-tz11U/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nicolas de Tracy",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-07T23:00:15Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "H0HBN4ju1os"
      },
      "snippet": {
        "publishedAt": "2023-05-01T17:04:10Z",
        "channelId": "UCWjzIoNgSM1g9O6k4Cd4cyQ",
        "title": "Hombre preparado en el Show #funny #comedy #standup #VeanloEntero",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/H0HBN4ju1os/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/H0HBN4ju1os/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/H0HBN4ju1os/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nicolas de Tracy",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-01T17:04:10Z"
      }
    }
  ]
}*/
