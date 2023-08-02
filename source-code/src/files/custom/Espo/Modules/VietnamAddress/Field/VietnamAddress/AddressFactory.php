<?php

namespace Espo\Modules\VietnamAddress\Field\VietnamAddress;

use Espo\{
    ORM\Entity,
    ORM\Value\ValueFactory,
};

use Espo\Modules\VietnamAddress\Field\VietnamAddress;

class AddressFactory implements ValueFactory
{
    public function isCreatableFromEntity(Entity $entity, string $field): bool
    {
        return true;
    }

    public function createFromEntity(Entity $entity, string $field): VietnamAddress
    {
        return (new AddressBuilder())
           ->setStreet($entity->get($field . 'Street'))
           ->setCity($entity->get($field . 'City'))
           ->setDistrict($entity->get($field . 'District'))
           ->setWard($entity->get($field . 'Ward'))
           ->build();
    }
}
