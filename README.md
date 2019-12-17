# Web Scraping and Data Wrangling for Fare Evasion Enforcement in New York City
We provide code to gather data from NYPD's records of fare enforcement, NYC community district data and police presence data from twitter's @unfarenyc. We use these to create an interactive map, where one can see collected data for subway stations of interest to us.

### Requirements
To run our code, it's required you install the following libraries
- pandas
- numpy
- matplotlib
- Twitter
- Folium
- NLTK
- Image
- Functools
- Pillow
Additionally, you will need access to Twitter's API via your own API key.

### To get the interactive map running:
1. Make sure you have the necessary libraries installed.
2. Run all cells of "fairevasion_main.ipynb"
3. Run all cells of "png_formation.ipynb"
4. Run all cells of "Map_Final.ipynb"
5. Open Map.html

### Data Sources
- <a href="https://www1.nyc.gov/site/nypd/stats/reports-analysis/subway-fare-evasion.page">New York Police Department Fare Evasion Arrests and Summonses by Quarter</a>
- <a href="http://web.mta.info/developers/data/nyct/subway/Stations.csv">New York City Metro Transit Association Subway Names and Locations</a>
- <a href="https://data.cityofnewyork.us/City-Government/Census-Demographics-at-the-NYC-Community-District-/5unr-w4sc ">City of New York Community District Level Demographics</a>
- <a href="https://twitter.com/unfarenyc">Twitter Account @unfarenyc Reporting Police Sightings</a>
- <a href="https://twitter.com/unfarenyc">Twitter Account @unfarenyc Reporting Police Sightings</a>
- <a href="http://web.mta.info/nyct/facts/ridership/">Weekday and Weekend MTA Ridership by Subway Station</a>
- <a href="http://app.coredata.nyc/?mlb=false&ntii=&ntr=&mz=14&vtl=https%3A%2F%2Fthefurmancenter.carto.com%2Fu%2Fnyufc%2Fapi%2Fv2%2Fviz%2F98d1f16e-95fd-4e52-a2b1-b7abaf634828%2Fviz.json&mln=false&mlp=true&mlat=40.71781&ptsb=&nty=&mb=roadmap&pf=%7B%22subsidies%22%3Atrue%7D&md=map&mlv=false&mlng=-73.990806&btl=Borough&atp=properties">NYU tool to view New York City Neighborhood Income Levels</a>

### Code References
In doing our project, we made use of the following code resources
- <a href="https://github.com/bear/python-twitter"> Bear Twitter wrapper for Python </a>
- Medium Article <a href="https://towardsdatascience.com/data-visualization-with-python-folium-maps-a74231de9ef7">"Data Visualization with Python Folium Maps" </a>
- nkmk tutorial <a href="https://note.nkmk.me/en/python-pillow-concat-images/">"Concatenating Images with Python, Pillow" </a>


### Visualization References
- UCSC CMPS 165 Final Project <a href="https://sureshlodha.github.io/CMPS165_Spring2016_FinalProjects/projects/NYvsChicago/index.html">New York City vs Chicago </a>
