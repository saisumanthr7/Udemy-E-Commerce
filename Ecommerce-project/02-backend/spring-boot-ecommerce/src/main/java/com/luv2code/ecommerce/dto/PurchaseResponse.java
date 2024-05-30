package com.luv2code.ecommerce.dto;

import lombok.Data;
import lombok.NonNull;

@Data
@NonNull
public class PurchaseResponse {

    private final String orderTrackingNumber;
}
