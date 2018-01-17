from rest_framework import viewsets

from .models import Ticket
from .serializers import TicketSerializer


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.filter(haveRead=False).order_by('-created_at')
    serializer_class = TicketSerializer
