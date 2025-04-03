from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def example_view(request):
    return Response({"message": "Привет от Django!"})