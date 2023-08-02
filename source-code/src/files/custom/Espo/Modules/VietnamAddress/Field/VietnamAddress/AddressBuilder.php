<?php

namespace Espo\Modules\VietnamAddress\Field\VietnamAddress;

use Espo\Modules\VietnamAddress\Field\VietnamAddress;

/**
 * An address value builder.
 */
class AddressBuilder
{
    private ?string $street;

    private ?string $city;

    private ?string $district;

    private ?string $ward;


    public function clone(VietnamAddress $address): self
    {
        $this->setStreet($address->getStreet());
        $this->setCity($address->getCity());
        $this->setDistrict($address->getDistrict());
        $this->setWard($address->getWard());

        return $this;
    }

    public function setStreet(?string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function setDistrict(?string $district): self
    {
        $this->district = $district;

        return $this;
    }

    public function setWard(?string $ward): self
    {
        $this->ward = $ward;

        return $this;
    }

    public function build(): VietnamAddress
    {
        return new VietnamAddress(
            $this->street,
            $this->city,
            $this->district,
            $this->ward
        );
    }
}
