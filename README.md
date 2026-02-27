# Unit 3: Performance Assessment

Why did you pick this API topic?
I chose this topic because I have experience in music production and beat making. I understand concepts like BPM, key, genre, and sample types.


Describe your API and the available data endpoints

My API is a Music Sample Library API. It stores and serves information about different music production samples created by Ahmed.

GET /
Displays a welcome message explaining what the API does.

GET /docs
Explains how to use the API and lists available endpoints.

GET /api/samples
Returns all 10 sample objects in JSON format.

GET /api/samples/:id
Returns one specific sample based on the ID number provided in the URL.

How was your experience building your own API server after using other APIs as a client in Unit 2?

In Unit 2, I only interacted with APIs by sending requests and receiving data. I focused on how to fetch and use JSON responses. Building my own API helped me understand how servers organize and send that data in the first place.