from django.shortcuts import render
from django.http import JsonResponse
from .models import Note
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSerializer

# Create your views here.


@api_view(['GET'])
def getRouts(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all().order_by('-updated')
    serializedNotes = NoteSerializer(notes, many=True)
    return Response(serializedNotes.data)


@api_view(['GET'])
def getNote(request, id):
    # print('*******************')
    # print(request.kwargs['id'])
    # print('*******************')

    notes = Note.objects.get(pk=id)
    serializedNotes = NoteSerializer(notes, many=False)
    return Response(serializedNotes.data)

@api_view(['PUT'])
def updateNote(request,id):
    data = request.data
    note = Note.objects.get(id=id)
    # print('*******************')
    # print(data)
    serializer =  NoteSerializer(instance=note,data=data,many=False)
    print(serializer.is_valid())
    if serializer.is_valid():
        serializer.save()
    # print('*******************')
    return Response(serializer.data) 

@api_view(['POST'])
def addNote(request):
    print('**************>>>>>>>>>>POST')
    data= request.data
    print('*******************')
    print(data)
    print('*******************')
    if data:
        serializer = NoteSerializer(data=data)
        if serializer.is_valid() : serializer.save()
        return Response(serializer.data)
    return Response()