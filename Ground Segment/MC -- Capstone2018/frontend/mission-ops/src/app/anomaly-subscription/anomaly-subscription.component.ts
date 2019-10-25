import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/subscriptions/subscriptions.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'src/classes/subscription';
import { System } from 'src/classes/system';
import { SystemService } from 'src/app/services/system/system.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-anomaly-subscription',
  templateUrl: './anomaly-subscription.component.html',
  styleUrls: ['./anomaly-subscription.component.scss']
})
export class AnomalySubscriptionComponent implements OnInit {

  subscriptions: Subscription[];
  systems: System[];

  constructor(private route: ActivatedRoute, private subService: SubscriptionsService, private systemService: SystemService, private toastr: ToastrService) { }

  ngOnInit() {
    const userID = this.route.snapshot.queryParamMap.get('id');
    this.getSubscriptions(userID);
  }

  getSubscriptions(userID) {
    this.subService.getSubscriptions(userID)
      .subscribe(subscriptions => { 
        this.subscriptions = subscriptions;
        this.getSystems();
      })
  }

  addSubscription(systemID, systemName) {
    const userID = this.route.snapshot.queryParamMap.get('id');
    this.subService.addSubscription(systemID, userID)
      .subscribe(response => {
        this.getSubscriptions(userID);
        this.toastr.success(`You're now subscribed to ${systemName}.`, "Success!");
      });
  }

  getSystems() {
    this.systemService.getSystems()
    .subscribe(systems => {
      this.systems = systems;
    })
  }

  removeSub(systemID, systemName) {
    const userID = this.route.snapshot.queryParamMap.get('id');
    this.subService.deleteSubscription(systemID, userID)
      .subscribe(response => {
        this.getSubscriptions(userID);
        this.toastr.success(`You're now unsubscribed from ${systemName}.`, "Success!");
      });
  }

  isSubscribed(systemID): boolean {
    for (var i = 0; i < this.subscriptions.length; i++) {
      if (systemID == this.subscriptions[i].systemID) {
          return true;
        }
      }
      return false;
    }
}
